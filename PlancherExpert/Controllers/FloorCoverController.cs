using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using PlancherExpert.Models;

namespace PlancherExpert.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FloorCoverController : ControllerBase
    {
        private readonly string connectionString = "Data Source=.\\sqlexpress;Initial Catalog=PlancherExpert;Integrated Security=True;TrustServerCertificate=true;";

        // GET: api/<ItemController>
        [HttpGet]
        public FloorCover[] Get()
        {
            List<FloorCover> ItemList = new List<FloorCover>();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string sql = "SELECT * FROM FloorCover";
                using (SqlCommand cmd = new SqlCommand(sql, connection))
                {
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            FloorCover item = new FloorCover();
                            item.Id = reader.GetInt32(0);
                            item.Name = reader.GetString(1);

                            if (!reader.IsDBNull(2))
                            {
                                item.ImgUrl = reader.GetString(2);
                            }
                            else
                            {
                                item.ImgUrl = "";
                            }

                            item.PricePerSquareMeter = Convert.ToSingle(reader.GetDouble(3));
                            item.InstallationPerSquareMeter = Convert.ToSingle(reader.GetDouble(4));
                            ItemList.Add(item);
                        }
                    }
                }
            }
            return ItemList.ToArray();
        }

        // GET api/<ItemController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string sql = "SELECT * FROM FloorCover WHERE id = @Id";

                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        // Add parameter to prevent SQL injection
                        command.Parameters.AddWithValue("@Id", id);

                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                FloorCover floorCover = new FloorCover
                                {
                                    Id = reader.GetInt32(0),
                                    Name = reader.GetString(1),
                                    PricePerSquareMeter = Convert.ToSingle(reader.GetDouble(3)),
                                    InstallationPerSquareMeter = Convert.ToSingle(reader.GetDouble(4)),
                                };

                                return Ok(floorCover);
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

        // POST api/<ItemController>
        [Route("add")]
        [HttpPost]
        public IActionResult Post([FromBody] FloorCover floorCover)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string sql = "INSERT INTO FloorCover (name, pricePerSquareMeter,installationPerSquareMeter) VALUES (@name, @pricePerSquareMeter, @installationPerSquareMeter)";

                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        // Add parameters to prevent SQL injection
                        command.Parameters.AddWithValue("@name", floorCover.Name);
                        command.Parameters.AddWithValue("@pricePerSquareMeter", floorCover.PricePerSquareMeter);
                        command.Parameters.AddWithValue("@installationPerSquareMeter", floorCover.InstallationPerSquareMeter);

                        command.ExecuteNonQuery();
                    }
                }

                return Ok(floorCover);
            }
            catch (Exception ex)
            {
                // Log the exception or handle it appropriately
                return StatusCode(500, "Internal server error");
            }
        }

        // PUT api/<ItemController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] FloorCover floorCover)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string sql = "UPDATE FloorCover " +
                                         "SET name = @Name, " +
                                         "    pricePerSquareMeter = @PricePerSquareMeter, " +
                                         "    installationPerSquareMeter = @InstallationPerSquareMeter, " +
                                         "    updated_At = GETDATE() " +
                                         "WHERE id = @Id";

                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        // Add parameters to prevent SQL injection
                        command.Parameters.AddWithValue("@Name", floorCover.Name);
                        command.Parameters.AddWithValue("@PricePerSquareMeter", floorCover.PricePerSquareMeter);
                        command.Parameters.AddWithValue("@InstallationPerSquareMeter", floorCover.InstallationPerSquareMeter);
                        command.Parameters.AddWithValue("@Id", id);

                        // Execute the query
                        int rowsAffected = command.ExecuteNonQuery();

                        if (rowsAffected > 0)
                        {
                            return Ok($"Row with ID {id} updated successfully.");
                        }
                        else
                        {
                            return NotFound($"No row found with ID {id}.");
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

        // DELETE api/<ItemController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    string sql = "DELETE FROM FloorCover WHERE id = @Id";

                    using (SqlCommand command = new SqlCommand(sql, connection))
                    {
                        // Add parameters to prevent SQL injection
                        command.Parameters.AddWithValue("@Id", id);

                        // Execute the query
                        int rowsAffected = command.ExecuteNonQuery();

                        if (rowsAffected > 0)
                        {
                            return Ok($"Row with ID {id} deleted successfully.");
                        }
                        else
                        {
                            return NotFound($"No row found with ID {id}.");
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
    }
}
