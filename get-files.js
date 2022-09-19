import process from 'process'
import minimist from 'minimist'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import fs from 'fs'
import https from 'https'


async function main () {
  const args = minimist(process.argv.slice(2))
  const token = args.token
  const cid = args.cid

  console.log("args:"+args);
  console.log("token:"+token);
  console.log("cid:"+cid);

  if (!token) {
    return console.error('A token is needed. You can create one on https://web3.storage')
  }

  if (args._.length < 1) {
    return console.error('Please supply the path to a file or directory')
  }

  const storage = new Web3Storage({ token })
  //const files = []

  // for (const path of args._) {
  //   const pathFiles = await getFilesFromPath(path)
  //   files.push(...pathFiles)
  // }

  // console.log(`Uploading ${files.length} files`)
  // const cid = await storage.put(files)
  // console.log('Content added with CID:', cid)

  const res = await storage.get(cid); // Web3Response
  console.log("res:"+res);
  const filesList = await res.files(); // Web3File[]
  console.log("filesList:"+filesList);

  const url = `https://bafybeiaag56c7xlngirbmv6w5laycs6st6sac2m62y67lvs7ziwb6ypf2y.ipfs.w3s.link/siddhuweb3storage.txt`
  for (const file of filesList) {    
    console.log("Ans:"+`${file.cid} ${file.name} ${file.size} `);       
    https
    .get(url, res => {
      // Open file in local filesystem
      const file = fs.createWriteStream(`siddhuweb3storage.txt`)
  
      // Write data into local file
      res.pipe(file)
  
      // Close the file
      file.on('finish', () => {
        file.close()
        console.log(`File downloaded!`)
      })
    })
    .on('error', err => {
      console.log('Error: ', err.message)
    })
    }

    
}

main()