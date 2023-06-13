# ts-archive
Learning type script
When we compile .ts file it coverts into js file
we can use type with primitives such as unions but with interface we cannot
Ex-
type tns = string | number // correct
initerface ins = string | number // compilation err
class can implement interfaces

Compile index.ts file
tsc inidex

watch mode
tsc --watch index

initialize ts file
tsc --init
