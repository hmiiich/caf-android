<?php

namespace App\Http\Controllers;

use App\Models\Caftan;
use Illuminate\Http\Request;

class CaftanController extends Controller
{
    // Liste tous les caftans
    public function index()
    {
        $caftans = Caftan::all()->map(function($c) {
            return [
                'id' => $c->id,
                'title' => $c->title,
                'description' => $c->description,
                'size' => $c->size,
                'color' => $c->color,
                'price' => $c->price,
                'image_url' => url("storage/{$c->image}"),
            ];
        });

        return response()->json($caftans);
    }

    // Voir un caftan spécifique
    public function show($id)
    {
        $c = Caftan::findOrFail($id);

        return response()->json([
            'id' => $c->id,
            'title' => $c->title,
            'description' => $c->description,
            'size' => $c->size,
            'color' => $c->color,
            'price' => $c->price,
            'image_url' => url("storage/{$c->image}"),
        ]);
    }

    // Ajouter un nouveau caftan avec image
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'nullable|string',
            'size' => 'required|string',
            'color' => 'required|string',
            'price' => 'required|numeric',
            'image' => 'required|file|mimes:jpg,jpeg,png,gif',
        ]);

        $caftan = new Caftan();
        $caftan->title = $request->title;
        $caftan->description = $request->description;
        $caftan->size = $request->size;
        $caftan->color = $request->color;
        $caftan->price = $request->price;

        // Stocker l'image dans storage/app/public/caftans
        $path = $request->file('image')->store('caftans', 'public');
        $caftan->image = $path; // stocker juste le chemin

        $caftan->save();

        return response()->json([
            'message' => 'Caftan créé avec succès',
            'caftan' => [
                'id' => $caftan->id,
                'title' => $caftan->title,
                'size' => $caftan->size,
                'color' => $caftan->color,
                'price' => $caftan->price,
                'image_url' => url("storage/{$caftan->image}"),
            ]
        ]);
    }

    // Récupérer l'image d'un caftan
    public function getImage($id)
    {
        $caftan = Caftan::findOrFail($id);
        $path = storage_path("app/public/{$caftan->image}");

        if (!file_exists($path)) {
            abort(404);
        }

        return response()->file($path);
    }
}
