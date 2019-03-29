import splitMessage from '../js/index';

describe('Split message', () => {
  test("Split this string: I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.", () => {
    expect(splitMessage("I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.")).toEqual(["1/2 I can't believe Tweeter now supports chunking", "2/2 my messages, so I don't have to do it myself."]);
  });

  test("Split this string: Ican'tbelieveTweeternowsupportschunkingmy messages, so I don't have to do it myself.", () => {
    expect(splitMessage("Ican'tbelieveTweeternowsupportschunkingmy messages, so I don't have to do it myself.")).toEqual(["1/2 Ican'tbelieveTweeternowsupportschunkingmy", "2/2 messages, so I don't have to do it myself."]);
  });

  test("Split this string: Ican'tbelieveTweeternowsupportschunkingmymessages, so I don't have to do it myself.", () => {
    expect(splitMessage("Ican'tbelieveTweeternowsupportschunkingmymessages, so I don't have to do it myself.")).toEqual(false);
  });
});
