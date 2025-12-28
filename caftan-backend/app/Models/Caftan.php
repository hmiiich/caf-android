<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Caftan extends Model
{
    protected $fillable = ['title', 'description', 'size', 'color', 'price', 'image_path'];

    protected $hidden = ['image'];

}
