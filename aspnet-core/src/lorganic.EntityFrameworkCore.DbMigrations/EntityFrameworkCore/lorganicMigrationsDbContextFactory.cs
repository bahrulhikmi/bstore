using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace lorganic.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class lorganicMigrationsDbContextFactory : IDesignTimeDbContextFactory<lorganicMigrationsDbContext>
    {
        public lorganicMigrationsDbContext CreateDbContext(string[] args)
        {
            lorganicEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<lorganicMigrationsDbContext>()
                .UseMySql(configuration.GetConnectionString("Default"), MySqlServerVersion.LatestSupportedServerVersion);

            return new lorganicMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../lorganic.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
