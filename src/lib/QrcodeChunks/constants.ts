// What the QR spec would allow:
// const QR_CODE_MAX_BYTE_LENGTH = 2953;

// What the library currently allows:
// const QR_CODE_MAX_BYTE_LENGTH = 2332;

// For testing purposes:
const QR_CODE_MAX_BYTE_LENGTH = 15;

export const maxChunkLength: number = QR_CODE_MAX_BYTE_LENGTH - 'MQR00.99.'.length;
