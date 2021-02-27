using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace lorganic.EntityFrameworkCore
{
    [DependsOn(
        typeof(lorganicEntityFrameworkCoreModule)
        )]
    public class lorganicEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<lorganicMigrationsDbContext>();
        }
    }
}
