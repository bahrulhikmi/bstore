using System.Threading.Tasks;

namespace lorganic.Data
{
    public interface IlorganicDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
