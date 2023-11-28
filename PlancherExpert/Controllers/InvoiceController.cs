using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using PlancherExpert.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PlancherExpert.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly string connectionString = "Data Source=.\\sqlexpress;Initial Catalog=PlancherExpert;Integrated Security=True;TrustServerCertificate=true;";

        // GET: api/<InvoiceController>
        [HttpGet]
        public Invoice[] Get()
        {
            List<Invoice> InvoiceList = new List<Invoice>();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string sql = "SELECT * FROM Invoice";
                using (SqlCommand cmd = new SqlCommand(sql, connection))
                {
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Invoice invoice = new Invoice
                            {
                                Id = reader.GetInt32(0),
                                ClientId = reader.GetInt32(1),
                                FloorId = reader.GetInt32(2),
                                Width = Convert.ToSingle(reader.GetDouble(3)),
                                Height = Convert.ToSingle(reader.GetDouble(4)),
                            };
                            InvoiceList.Add(invoice);
                        }
                    }
                }
            }
            return InvoiceList.ToArray();
        }

        // GET api/<InvoiceController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string sql = "SELECT * FROM Invoice WHERE id = @Id";

                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        // Add parameter to prevent SQL injection
                        command.Parameters.AddWithValue("@Id", id);

                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                Invoice invoice= new Invoice
                                {
                                    Id = reader.GetInt32(0),
                                    ClientId = reader.GetInt32(1),
                                    FloorId = reader.GetInt32(2),
                                    Width = Convert.ToSingle(reader.GetDouble(3)),
                                    Height = Convert.ToSingle(reader.GetDouble(4)),
                                };

                                return Ok(invoice);
                            }
                            else
                            {
                                return NotFound($"No row found with ID {id}.");
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Log the exception or handle it appropriately
                return StatusCode(500, "Internal server error");
            }
        }

        // POST api/<InvoiceController>
        [HttpPost]
        public IActionResult Post([FromBody] Invoice invoice)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string sql = "INSERT INTO Invoice (client_id, floorCover_id, width, height) VALUES (@ClientId, @FloorCoverId, @Width, @Height)";

                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        // Add parameters to prevent SQL injection
                        command.Parameters.AddWithValue("@ClientId", invoice.ClientId);
                        command.Parameters.AddWithValue("@FloorCoverId", invoice.FloorId);
                        command.Parameters.AddWithValue("@Width", invoice.Width);
                        command.Parameters.AddWithValue("@Height", invoice.Height);

                        command.ExecuteNonQuery();
                    }
                }

                return Ok(invoice);
            }
            catch (Exception ex)
            {
                // Log the exception or handle it appropriately
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT api/<InvoiceController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<InvoiceController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
