import { readFileSync, writeFileSync } from 'fs';

const fileData = readFileSync('./test1.txt', 'utf-8');

writeFileSync('./test1-copy.txt', fileData + " --copy--");