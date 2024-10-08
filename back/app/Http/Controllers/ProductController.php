<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;

class ProductController extends Controller
{
    function productsActivos(Request $request){
        $user = $request->user();
        error_log($user->id);
        if ($user->id == 1) {
            return Product::where('status', 'ACTIVE')->orderBy('id', 'desc')->get();
        }else{
            $products = Product::where('status', 'ACTIVE')
                ->where('company_id', $user->company_id)
                ->orderBy('id', 'desc')
                ->get();
            return $products;
        }
    }
    public function index(Request $request)
    {
        $search = $request->search;
        $user = $request->user();
        if ($user->id == 1) {
            return Product::orderBy('id', 'desc')->where('name', 'like', '%'.$search.'%')->get();
        }else{
            return Product::where('company_id', $user->company_id)
                ->orderBy('id', 'desc')
                ->where('name', 'like', '%'.$search.'%')
                ->get();
        }
    }

    public function store(Request $request)
    {
        $file = $request->file('file');
        $productRequest = json_decode($request->product, true);
        $fileName = $this->uploadFileResize($file);
        $product = Product::create([
            'name' => $productRequest['name'],
            'description' => $productRequest['description'] == '' ? 'Sin descripción' : $productRequest['description'],
            'image' => $fileName,
            'price' => $productRequest['price'],
            'costo' => $productRequest['costo'],
            'status' => $productRequest['status'],
            'stock' => $productRequest['stock'],
            'category_id' => $productRequest['category_id'],
            'user_id' => $request->user()->id,
            'company_id' => $request->user()->company_id
        ]);
        return response()->json($product, 201);
    }

    public function update(Request $request, $id){
        $file = $request->file('file');
        $productRequest = json_decode($request->product, true);
//        $product=Product::find($productRequest['id']);
        if ($request->hasFile('file')) {
            error_log('entro');
            $fileName = $this->uploadFileResize($file);
            $productRequest['image'] = $fileName;
        }
        $product = Product::find($id);
        $product->update($productRequest);
        return response()->json($product, 200);
    }
    public function destroy($id){
        $product = Product::find($id);
        $product->delete();
        return response()->json(null, 204);
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
