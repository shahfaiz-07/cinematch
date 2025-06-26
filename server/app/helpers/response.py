def ServerResponse(status: int, message: str="", data: dict | list | None = None, error: str="") -> dict:
    return {
        "message": message,
        "error": error,
        "status": status,
        "success": status < 300,
        "data": data
    }