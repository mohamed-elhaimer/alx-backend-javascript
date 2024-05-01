export default function createInt8TypedArray(length, position, value) {
  try {
    const Buffer = new ArrayBuffer(length);
    const dataview = new DataView(Buffer);
    dataview.setInt8(position, value);
    return dataview;
  } catch (err) {
    throw new Error('Position outside range');
  }
}
