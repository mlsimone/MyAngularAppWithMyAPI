using System;


namespace MyFunctionProj
{
    public class Candy
    {
        private int id;
        private string name;
        private int quantity;

        public Candy(string name)
        {
            id = 0;
            this.name = name;
            this.quantity = 0;
        }

        public int getId() { return this.id; }
        public string getName() { return this.name; }
    }

    public class Product
    {
        public int id { get; set; }

        public Product(int id)
        {
            this.id = id;
           
        }

    }
}
