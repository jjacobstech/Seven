<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class BookingController extends Controller
{
    public function index()
    {
        return Inertia::render("BookACall/Index");
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            "firstName" => "required|string",
            "lastName" => "required|string",
            "email" => "required|email",
            "phone" => "nullable|string",
            "company" => "nullable|string",
            "services" => "array",
            "message" => "nullable|string",
            "date" => "nullable|string",
            "time" => "nullable|string",
        ]);

        // Here we could send an email using Mail::to("...")->send(new BookingEmail($validated));
        // For now, matching the Next.js version which just logged to console by default unless configured.
        
        Log::info("📧 New Booking Submission:", $validated);

        // Redirect back with a success message or just return back since Inertia will handle it.
        return back()->with("success", true);
    }
}
