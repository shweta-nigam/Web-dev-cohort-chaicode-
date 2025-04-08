class ApiResponse {
    constructor (statusCode, data, message = "Success")
    {
       this.statusCode = statusCode;
       this.data = data;
       this.message = message;
       this.success = statusCode  < 400  // why? check below
    }
}

export { ApiResponse}


/* This checks if the status code is below 400:

If statusCode < 400 (e.g., 200, 201, 204 → Success), this.success = true

If statusCode >= 400 (e.g., 400, 404, 500 → Error), this.success = false

This ensures:

Success responses have success: true

Error responses have success: false
 */