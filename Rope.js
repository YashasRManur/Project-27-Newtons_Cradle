class Rope{
    constructor(body1, pointB){
        var options = {
            bodyA: body1,
            pointB: pointB,
            stifness: 0.04,
            length: 200
        }
        this.pointB=pointB;
        this.Rope= Matter.Constraint.create(options);
        World.add(world, this.Rope);
    }

      display(){
            var pointA = this.Rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
}
