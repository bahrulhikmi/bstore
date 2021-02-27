using lorganic.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace lorganic.Permissions
{
    public class lorganicPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(lorganicPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(lorganicPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<lorganicResource>(name);
        }
    }
}
