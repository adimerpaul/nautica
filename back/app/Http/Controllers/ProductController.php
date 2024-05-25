<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;

class ProductController extends Controller{
    public function index(){
        return Product::orderBy('id', 'desc')->get();
    }
    public function store(Request $request){
        $file = $request->file('file');
        $productRequest = json_decode($request->product, true);
        $fileName = $this->uploadFileResize($file);
        $product = Product::create([
            'name' => $productRequest['name'],
            'description' => $productRequest['description']=='' ? 'Sin descripción' : $productRequest['description'],
            'image' => $fileName,
            'price' => $productRequest['price'],
            'costo' => $productRequest['costo'],
            'status' => $productRequest['status'],
            'stock' => $productRequest['stock'],
            'category_id' => $productRequest['category_id'],
            'user_id' => $request->user()->id,
        ]);
        return response()->json($product, 201);
    }
    public function uploadFileResize($file){
        if(file_exists($file)){
            $name = time().$file->getClientOriginalName();
            $image = ImageManager::imagick()->read($file->getRealPath());
            $image->scale(600, 600);
            $image->save(public_path('/images/'.$name));
            return $name;
        }else{
            return 'default.png';
        }
    }
}
