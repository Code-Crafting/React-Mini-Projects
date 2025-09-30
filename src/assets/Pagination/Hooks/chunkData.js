export function useChunkData(data, desiredDivision) {
  const chunk = [];
  if (data) {
    for (let i = 0; i < data.length; i += desiredDivision) {
      chunk.push(data.slice(i, i + desiredDivision));
    }
  }
  return chunk;
}
