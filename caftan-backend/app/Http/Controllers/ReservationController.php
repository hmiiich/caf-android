<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function store(Request $request)
    {
        $reservation = Reservation::create($request->all());
        return response()->json($reservation);
    }

    public function userReservations($id)
    {
        return response()->json(
            Reservation::where('user_id', $id)->get()
        );
    }
}

