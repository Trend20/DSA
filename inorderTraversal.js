inorder(node)
{
    
    // check if the node is not null
    if(node !==  null){
        inorder(node.left)
        console.log(node.data)
        inorder(node.right)
    }

}