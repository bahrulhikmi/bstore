using System;
using System.Collections.Generic;
using System.Text;
using lorganic.Localization;
using Volo.Abp.Application.Services;

namespace lorganic
{
    /* Inherit your application services from this class.
     */
    public abstract class lorganicAppService : ApplicationService
    {
        protected lorganicAppService()
        {
            LocalizationResource = typeof(lorganicResource);
        }
    }
}
