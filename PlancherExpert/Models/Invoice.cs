namespace PlancherExpert.Models
{
    public class Invoice
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public int FloorId { get; set; }
        public float Width { get; set; }
        public float Height { get; set; }
    }
}
