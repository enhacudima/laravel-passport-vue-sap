<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User; 

class VerificationController extends Controller
{
public function verify($user_id, Request $request) {
    if (!$request->hasValidSignature()) {
        return redirect()->to('/verifyResult');
    }

    $user = User::findOrFail($user_id);

    if (!$user->hasVerifiedEmail()) {
        $user->markEmailAsVerified();
    }

    return redirect()->to('/login');
}

public function resend(Request $request) {
    if (auth()->user()->hasVerifiedEmail()) {
        return response()->json(["msg" => "Email already verified."], 400);
    }

    auth()->user()->sendEmailVerificationNotification();

    return response()->json(["msg" => "Email verification link sent on your email id"]);
}
}
