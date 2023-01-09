function parentAccess(par) {
  return par.parentElement.nodeName;
}

console.log(parentAccess(document.querySelector("p")));

// module.eports = parentAccess;
