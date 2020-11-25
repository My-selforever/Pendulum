class Attach
{
    constructor(a,b)
    {
        var constraint_Options =
        {
            bodyA:a,
            pointB:b,
            stiffness:0.02,
            length:200
        }
        this.attach = Constraint.create(constraint_Options);
        World.add(world,this.attach);
       
    }
    
    display()
    {
      line(this.attach.bodyA.position.x,
        this.attach.bodyA.position.y,
        this.attach.pointB.x,
        this.attach.pointB.y)
    }
}