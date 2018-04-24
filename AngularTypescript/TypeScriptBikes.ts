 class Bike {
    price: number;
    max_speed: String;
    miles: number;
    constructor(price: number, max_speed: String)
      {
				this.price = price;
				this.max_speed = max_speed;
				this.miles = 0;
      };
		
		displayinfo()
		{
			console.log("-----Display-------")
			console.log("price: ", this.price);
			console.log("Max_speed: ", this.max_speed);
			console.log("Miles: ", this.miles);
			return this;
		}

		ride()
		{
			this.miles += 10;
			console.log("Riding: ", this.miles);
			return this;
		}

		reverse()
		{
			if (this.miles > 0)
			{
			this.miles -= 5;
			console.log("Riding: ", this.miles);
			}
			return this;
		}

 }

let ride1 = new Bike(200, "25mph");
let ride2 = new Bike(200, "25mph");
let ride3 = new Bike(200, "25mph");

ride1.ride().ride().ride().reverse().displayinfo();
ride2.ride().ride().reverse().reverse().displayinfo();
ride3.reverse().reverse().reverse().displayinfo();

