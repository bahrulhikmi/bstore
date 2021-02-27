using Volo.Abp.Settings;

namespace lorganic.Settings
{
    public class lorganicSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(lorganicSettings.MySetting1));
        }
    }
}
