<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class AuthToken implements FilterInterface
{
    public function before(
        RequestInterface $request,
        $arguments = null
    )
    {
        $token = $request->getHeaderLine('Authorization');

        if ($token !== 'Bearer ELIBRARY_TOKEN_123') {

            return service('response')
                ->setStatusCode(401)
                ->setJSON([
                    'message' => 'Unauthorized'
                ]);
        }
    }

    public function after(
        RequestInterface $request,
        ResponseInterface $response,
        $arguments = null
    ) {
    }
}