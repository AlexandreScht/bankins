export class ServerException extends Error {
  constructor(status = 500, message = "An error occurred") {
    super(Array.isArray(message) ? message.join(' | ') : message);
    this.status = status;
    this.message = Array.isArray(message) ? message.join(' | ') : message;
  }
}

// export class NotFoundError extends ServerException {
//   constructor(message: string[] | string = 'Ressource non trouvée') {
//     super(404, message);
//   }
// }

export class InvalidArgumentError extends ServerException {
  constructor(message = 'Invalid arguments') {
    super(422, message);
  }
}

export class InvalidCredentialsError extends ServerException {
  constructor(message = 'Invalid credential') {
    super(401, message);
  }
}

export class InvalidAccessError extends ServerException {
  constructor(message = 'Access denied') {
    super(403, message);
  }
}
