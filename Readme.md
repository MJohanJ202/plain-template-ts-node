# Basic TypeScript Template with Node

# Welcome
This is a simple template for creating a Node.js project using TypeScript.  
It includes the necessary dependencies and configurations to get started.  

this is a template containing an initial configuration that can be used as  
a starting point to create a new node + typescript project. as a starting point  
to create a new node + typescript project. It also includes a way to test the code  
through the vites framework but you can change this to any of your choice.  
  
### Prerequisites   
Node.js installed  - version >18 and optionally package manager pnpm.   
as a recommendation, you can use the pnpm package manager or failing that,  
you can also use the manager of your choice,or failing that npm (Node Package Manager).  

## Getting Started
Clone this repository to your local machine. 
* you can run the pnpm run command to see all the scripts  
```pnpm run ``` 
* Run pnpm install the necessary dependencies.  
```pnpm run install || pnpm run i```    
You should now have a basic setup in which you can start coding your application.

### Dependencies 
1. typescript: for writing TypeScript code  
2. ts-node: for running TypeScript code directly  
3. nodemon: for automatically restarting the server on file changes  
4. vitest: for testing   

### Configuration
The following configurations are included in this template:  
tsconfig.json: TypeScript configuration file 

### Scripts
* Run build: compiles the TypeScript code  
```pnpm run build``` 
* Run start: starts the project by running the compiled JavaScript code.  
```pnpm run start```  
* Run dev: starts the project in development mode with nodemon.  
```pnpm run dev```   
* Run test: start run the testing files.  
```pnpm run test```
  
### Folder Structure  
1. src: contains the TypeScript source code  
2. dist: contains the compiled JavaScript code  
3. test: contains contain testing files.  
    
### Contributing  
Pull requests are welcome. For major changes, please open an issue first to   
discuss what you would like to change.

