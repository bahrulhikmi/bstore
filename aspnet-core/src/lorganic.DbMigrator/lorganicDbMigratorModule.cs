using lorganic.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace lorganic.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(lorganicEntityFrameworkCoreDbMigrationsModule),
        typeof(lorganicApplicationContractsModule)
        )]
    public class lorganicDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
