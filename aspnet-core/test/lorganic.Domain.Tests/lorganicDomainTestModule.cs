using lorganic.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace lorganic
{
    [DependsOn(
        typeof(lorganicEntityFrameworkCoreTestModule)
        )]
    public class lorganicDomainTestModule : AbpModule
    {

    }
}