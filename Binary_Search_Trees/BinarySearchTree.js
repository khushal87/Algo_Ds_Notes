class node
{
  constructor(value)
  {
    this.value=value;
    this.left=null;
    this.right=null;
  }
}
class myBST
{
  constructor()
  {
    this.root=null;
  }
  insert(value)
  {
    const newNode=new node(value);
    if(this.root===null)
    {
      this.root=newNode;
    }
    else
    {
      let currentNode=this.root;
      while(true)
      {
        if(value<currentNode.value)
        {
          if(!currentNode.left)
          {
            currentNode.left=newNode;
            return this;
          }
          currentNode=currentNode.left;        
        }
        else
        {
            if(!currentNode.right)
            {
              currentNode.right=newnode;
              return this;
            }
          currentNode=currentNode.right;
        }
      }
    }
  }
  lookup(value)
  {
    if(!this.root)
    {
      return false;
    }
    let currentnode=this.root;
    while(currentnode)
    {
      if(value<currentnode.value)
      {
        currentnode=currentnode.left;
      }
      else if(value>currentnode.value)
      {
        currentnode=currentnode.right;
      }
      else if(currentnode.value===value)
      {
        return currentnode;
      }
    }
    return null;
  }
}
const tree=new myBST();
tree.insert(10);
tree.insert(9);
tree.insert(7);
tree.lookup(10);
//JSON.stringify(traverse(tree.root));


function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
