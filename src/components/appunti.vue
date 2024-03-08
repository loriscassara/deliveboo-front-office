Lato vue:

npm install braintree



const express = require('express');
const braintree = require('braintree');

const app = express();

// Inizializzazione del client SDK di Braintree
const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox, // o braintree.Environment.Production per l'ambiente di produzione
  merchantId: 'your_merchant_id',
  publicKey: 'your_public_key',
  privateKey: 'your_private_key'
});

// Generazione del client token
app.get('/client_token', (req, res) => {
  gateway.clientToken.generate({}, (err, response) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response.clientToken);
    }
  });
});

// Gestione delle transazioni di pagamento
app.post('/checkout', (req, res) => {
  const nonceFromTheClient = req.body.payment_method_nonce;

  // Esegui la transazione di pagamento utilizzando il nonce e altri dettagli
  // La logica per l'elaborazione del pagamento verrà gestita qui utilizzando il SDK di Braintree
});

// Avvio del server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


lato back:

composer require braintree/braintree_php


<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Braintree\Gateway;

class OrderController extends Controller
{
    protected $gateway;

    public function __construct()
    {
        // Inizializzazione del client SDK di Braintree nel costruttore del controller
        $this->gateway = new Gateway([
            'environment' => 'sandbox', // 'sandbox' per l'ambiente di test, 'production' per l'ambiente di produzione
            'merchantId' => 'your_merchant_id',
            'publicKey' => 'your_public_key',
            'privateKey' => 'your_private_key'
        ]);
    }

    public function generateClientToken()
    {
        // Generazione del client token
        $clientToken = $this->gateway->clientToken()->generate();
        return response()->json(['clientToken' => $clientToken]);
    }

    public function checkout(Request $request)
    {
        $nonceFromTheClient = $request->input('payment_method_nonce');

        // Esegui la transazione di pagamento utilizzando il nonce e altri dettagli
        // La logica per l'elaborazione del pagamento verrà gestita qui utilizzando il SDK di Braintree
    }
}



rotte:

use App\Http\Controllers\OrderController;

Route::get('/client_token', [OrderController::class, 'generateClientToken']);
Route::post('/checkout', [OrderController::class, 'checkout']);



