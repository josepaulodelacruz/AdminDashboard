
export type GenericResponse = {
  data: Object,
  isError: boolean,
  message: string,
  title: stringa,
  statusCode: string,
}

export type ErrorResponse = {
  isError: boolean,
  message?: string
}
