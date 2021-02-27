using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace lorganic.Data
{
    /* This is used if database provider does't define
     * IlorganicDbSchemaMigrator implementation.
     */
    public class NulllorganicDbSchemaMigrator : IlorganicDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}