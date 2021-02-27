using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace lorganic
{
    [Dependency(ReplaceServices = true)]
    public class lorganicBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "lorganic";
    }
}
