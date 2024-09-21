<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

use Illuminate\Http\Request;

class ContactController extends Controller{
    public function sendContactEmail(Request $request)
    {
        // Validar los datos del formulario
        $validated = $request->validate([
            'tlf' => 'required',
            'email' => 'required|email',
            'name' => 'required',
            'subject' => 'required',
            'description' => 'required',
        ]);

        try {
            // Definir el contenido del correo usando un cuerpo de texto plano
            Mail::raw('Nombre: ' . $validated['name'] . "\nTeléfono: " . $validated['tlf'] . "\nDescripción: " . $validated['description'], function ($message) use ($validated) {
                $message->to('tu_email@ejemplo.com')
                    ->subject($validated['subject'])
                    ->from($validated['email']); // Correo del remitente
            });

            return response()->json(['message' => 'Correo enviado correctamente'], 200);

        } catch (\Exception $e) {
            // Capturar y registrar errores
            Log::error('Error enviando correo: ' . $e->getMessage());
            return response()->json(['message' => 'Error al enviar el correo'], 500);
        }
    }
}
