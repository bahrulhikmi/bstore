using Volo.Abp.Modularity;

namespace lorganic
{
    [DependsOn(
        typeof(lorganicApplicationModule),
        typeof(lorganicDomainTestModule)
        )]
    public class lorganicApplicationTestModule : AbpModule
    {

    }
}