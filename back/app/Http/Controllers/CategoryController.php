<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller{
    public function  index(){
        return Category::orderBy('id', 'desc')->get();
    }
    public function store(Request $request){
        $category = new Category();
        $category->name = $request->name;
//        $category->image = $request->image;
        $category->save();
        return $category;
    }
    public function update(Request $request, $id){
        $category = Category::find($id);
        $category->name = $request->name;
//        $category->image = $request->image;
        $category->save();
        return $category;
    }
    public function destroy($id){
        Category::destroy($id);
        return response()->json(['message' => 'Category deleted']);
    }
}
