using lorganic.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace lorganic.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class lorganicController : AbpController
    {
        protected lorganicController()
        {
            LocalizationResource = typeof(lorganicResource);
        }
    }
}