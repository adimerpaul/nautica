<?php

namespace App\Http\Controllers;

use App\Models\BoteFile;
use Illuminate\Http\Request;

class BoteFileController extends Controller{
    function index(Request $request){
        $boat_id = $request->boat_id;
        $bote_files = BoteFile::where('boat_id', $boat_id)->get();
    }
}
