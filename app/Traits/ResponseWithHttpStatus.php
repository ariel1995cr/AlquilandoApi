<?php
namespace App\Traits;


trait ResponseWithHttpStatus
{
    protected function success($message, $data = [], $status = 200)
    {
        return response()->json([
            'data' => $data,
            'message' => $message,
        ], $status);
    }

    protected function failure($message, $status = 422)
    {
        return response()->json([
            'message' => $message,
        ], $status);
    }
}

