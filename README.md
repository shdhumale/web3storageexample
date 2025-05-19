# web3storageexample
This repo contains node code to upload the files on distributed files sytesm IPFS - InterPlanetary File System 
contains a description of a directory structure and the contents of several files related to uploading files to the InterPlanetary File System (IPFS) using web3.storage.

Here's a breakdown of the file's contents:

Directory Structure: The project directory "shdhumale-web3storageexample" contains the following files: README.md, get-files.js, package.json, put-files.js, and siddhuweb3storage.txt.

README.md: This file describes the purpose of the repository, stating that it contains Node.js code to upload files to IPFS.

get-files.js: This file contains the code to retrieve files from web3.storage. It uses libraries like process, minimist, web3.storage, fs, and https. The script takes a token and a CID (Content Identifier) as arguments, retrieves files associated with the CID, and downloads a specific file (siddhuweb3storage.txt).

package.json: This file contains metadata about the project, including its name, version, description, dependencies (minimist and web3.storage), and author.

put-files.js: This file contains the code to upload files to web3.storage. It takes a token and file paths as arguments, reads the files, and uploads them to web3.storage, printing the CID of the uploaded content.

siddhuweb3storage.txt: This is a simple text file containing the text "this is siddhu web3storage txt files.".
