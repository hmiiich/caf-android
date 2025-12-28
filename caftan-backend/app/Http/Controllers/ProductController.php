<?php

// app/Http/Controllers/ProductController.php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    public function index(): JsonResponse
    {
        // Simple: Return all products
        return response()->json(Product::all());
    }

    public function store(Request $request): JsonResponse
    {
        // Simple validation for required fields
        $validatedData = $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'stock_quantity' => 'required|integer',
        ]);

        // Create and return the new product
        $product = Product::create($validatedData);

        return response()->json($product, 201); // 201 Created
    }
    
    // You can implement show, update, and destroy later!
}