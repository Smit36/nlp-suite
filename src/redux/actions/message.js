export const errorMessage = (errorMessage) => ({
  type: 'ERROR_MESSAGE',
  errorMessage,
});

export const successMessage = (successMessage) => ({
  type: 'SUCCESS_MESSAGE',
  successMessage,
});

export const clearMessages = () => ({
  type: 'CLEAR_ALL',
});
