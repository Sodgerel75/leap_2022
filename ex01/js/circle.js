var topLeft = new Point(100, 50);
var rectSize = new Size(100, 100);
var rect = new Rectangle(topLeft, rectSize);
var path = new Path.Rectangle(rect, 50);
path.fillColor = 'red';
rect.strokeColor = 'red';