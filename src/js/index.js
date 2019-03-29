const splitMessage = (message) => {
  const chunk = Math.ceil(message.length / 50);
  const wordArr = message.split(' ');
  let chunkCount = 1;
  let tempChunkMsg = `${chunkCount}/${chunk}`;
  let tempWordArr = [];
  const isValid = wordArr.filter(word => tempChunkMsg.length + word.length + 1 > 50).length ? false : true;

  if (isValid) {
    wordArr.forEach((word, index, arr) => {
      if (tempChunkMsg.length + word.length + 1 <= 50) {
        tempChunkMsg = `${tempChunkMsg} ${word}`;
      } else {
        tempWordArr.push(tempChunkMsg);
        chunkCount++;
        tempChunkMsg = `${chunkCount}/${chunk} ${word}`;
      }
      if (index === arr.length - 1) {
        tempWordArr.push(tempChunkMsg);
      }
    });
    return tempWordArr;
  }

  return false;
};
export default splitMessage;
