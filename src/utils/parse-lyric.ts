const lyricTimeRegex = /\[(\d{2,}):(\d{2})(?:[.:](\d{2,3}))?]/g;

export type lyricLine = {
  time: number;
  txt: string;
};

export function parseLyric(originLyric: string): lyricLine[] {
  const lines = originLyric.split('\n');
  const ret = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const res = lyricTimeRegex.exec(line);

    if (res) {
      const lyricTxt = line.replace(lyricTimeRegex, '').trim();

      if (res[3].length === 3) {
        res[3] = parseInt(res[3]) / 10 + '';
      }

      if (lyricTxt) {
        ret.push({
          time:
            Number(res[1]) * 60 * 1000 +
            Number(res[2]) * 1000 +
            (Number(res[3]) || 0) * 10,
          txt: lyricTxt,
        });
      }
    }
  }

  return ret;
}
