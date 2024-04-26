export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (err) {
    queue.push('Error: '.concat(err.message));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
