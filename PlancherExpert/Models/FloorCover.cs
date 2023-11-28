namespace PlancherExpert.Models
{
    public class FloorCover
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string ImgUrl { get; set; } = "/images/items/commercial-carpet.jpeg";
        public float PricePerSquareMeter { get; set; }
        public float InstallationPerSquareMeter { get; set; }
    }
}
